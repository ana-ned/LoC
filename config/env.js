// Runtime environment for the published prototype.
//
// REACT_APP_ENV=development is what mounts /prototypes/* — see isDev() in
// src/utils/env.ts. Nothing here points at an Uncapped host: the bundle has
// no backend, and index.html blocks cross-origin requests outright.
window.__RUNTIME_ENV__ = { REACT_APP_ENV: "development" }
