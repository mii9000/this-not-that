exports = function(json){
  var collection = context.services.get("mongodb-atlas").db("hacktoberfest").collection("posts");
  collection.insertOne(json)
  .then(inserted => {
    console.log('inserted success!');
  })
  .catch(insError => {
    console.error(insError);
  });
  return { 'ok': true };
};