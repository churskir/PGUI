import React from "react";

import { TeacherContext } from "./teacherContext";

export function Teacher() {
  const { Consumer } = TeacherContext;
  return (
    <div>
      <Consumer>
        {ctx => (
          <div>
            <h3>{ctx.name}</h3>
            <p>{ctx.officeHours}</p>
          </div>
        )}
      </Consumer>
    </div>
  );
}
