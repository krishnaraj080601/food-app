import { createContext } from "react";

import React from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;