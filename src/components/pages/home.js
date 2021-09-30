import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "..//users/Users";

export const home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);
