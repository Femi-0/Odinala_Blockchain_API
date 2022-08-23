const tokenFactory = require("./app/src/Methods");
const tokenfactory = new tokenFactory();
const express = require("express");
const app = new express();
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: "https://network.steigenberg.in",
  consumerKey: "CONSUMER_KEY",
  consumerSecret: "CONSUMER_SECRET",
  version: "wc/v3",
});

app.use(express.json());

app.get("/orders", async (req, res) => {
  try {
    const ords = await api.get("orders");
    res.send(ords.data);
    console.log(ords.data);
  } catch (error) {
    console.error(error);
  }
});

app.get("/balance", (req, res) => {
  const { tkn, owner } = req.body;
  tokenfactory
    .balance(tkn, owner)
    .then((bals) => res.send(bals.events.balz.returnValues[0]))
    .catch((error) => console.error(error));
});

app.get("/name", (req, res) => {
  return res.send("App name");
});


app.get("/list", (req, res) => {
  tokenfactory
    .listToken()
    .then((list) => res.send(list.events.listT.returnValues))
    .catch((err) => res.send(err));
});

const jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-lfadzurw.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://3.231.69.57:8080',
    issuer: 'https://dev-lfadzurw.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get("/authorized", function(req, res) {
  res.send("Secured Resource");
});

app.post("/fulfill", (req, res) => {
  const { tkn, to, amount } = req.body;
  tokenfactory
    .send(tkn, to, amount)
    .then((trans) => res.send(trans))
    .catch((err) => res.send(err));
});

app.listen(8080, () => console.log("listening on port 8080"));
