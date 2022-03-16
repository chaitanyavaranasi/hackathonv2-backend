module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      category: String,
      name: String,
      notes: String,
      claimed: Boolean,
      confirmed: Boolean,
      published: Boolean,
      longitute: Number,
      latitude: Number,
      },
    { timestamps: true }
  );
  
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Item = mongoose.model("item", schema);
  return Item;
};
