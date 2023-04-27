import { Skill } from "@/types/skill";
import React from "react";

type CheckboxProps = {
  skill: Skill["name"];
};

function Checkbox({ skill }: CheckboxProps) {
  return (
    <div className="flex items-center border rounded mb-2">
      <input
        type="checkbox"
        className="form-checkbox mr-2 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
      />
      <label htmlFor={`${skill}`} className="text-gray-700">
        {skill}
      </label>
    </div>
  );
};

export default Checkbox;
