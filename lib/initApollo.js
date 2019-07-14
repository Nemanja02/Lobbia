// import { ApolloClient, createNetworkInterface } from "react-apollo";
// import fetch from "isomorphic-fetch";

// let apolloClient = null;

// // Polyfill fetch() on the server (used by apollo-client)
// if (!process.browser) {
//   global.fetch = fetch;
// }

// function create(headers, initialState) {
//   return new ApolloClient({
//     initialState,
//     link: null,
//     ssrMode: !process.browser,
//     networkInterface: createNetworkInterface({
//       uri: "http://localhost:8080/graphql",
//       opts: {
//         credentials: "same-origin"
//       }
//     })
//   });
// }

// export default function initApollo(headers, initialState = {}) {
//   // Make sure to create a new client for every server-side request so that data
//   // isn't shared between connections (which would be bad)
//   if (!process.browser) {
//     return create(headers, initialState);
//   }

//   // Reuse client on the client-side
//   if (!apolloClient) {
//     apolloClient = create(headers, initialState);
//   }

//   return apolloClient;
// }
