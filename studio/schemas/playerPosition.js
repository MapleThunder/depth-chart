export default {
  title: "Player Position",
  name: "playerPosition",
  type: "document",
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string",
    },
    {
      title: "Position Reference",
      name: "position_ref",
      type: "reference",
      to: [{ type: "position" }],
    },
    {
      title: "Rating",
      name: "rating",
      type: "number",
      description: "Skill in position from 1-10",
      validation: (Rule) => Rule.min(1).max(10),
    },
  ],
};
