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
      title: "Kit Name",
      name: "kit_name",
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
      of: [
        {
          type: "reference",
          to: [{ type: "playerPosition" }],
        },
      ],
    },
  ],
};
