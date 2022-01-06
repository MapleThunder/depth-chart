export default {
  title: "Player",
  name: "player",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Kit Number",
      name: "kit_number",
      type: "number",
    },
    {
      title: "Position(s)",
      name: "positions",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { value: "STK", title: "Striker" },

          { value: "LAM", title: "Left Wing" },
          { value: "CAM", title: "Centre Attacking Mid" },
          { value: "RAM", title: "Right Wing" },

          { value: "LMD", title: "Left Mid" },
          { value: "CMD", title: "Centre Mid" },
          { value: "RMD", title: "Right Mid" },

          { value: "LWB", title: "Left Wingback" },
          { value: "DMD", title: "Defensive Mid" },
          { value: "RWB", title: "Right Wingback" },

          { value: "LFB", title: "Left Fullback" },
          { value: "CTB", title: "Centreback" },
          { value: "RFB", title: "Right Fullback" },

          { value: "GKP", title: "Goal Keeper" },
        ],
      },
    },
  ],
};
