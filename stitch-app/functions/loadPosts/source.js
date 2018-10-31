exports = function(start_id){
  var collection = context.services.get("mongodb-atlas").db("hacktoberfest").collection("posts");
  var posts = collection.find().sort( { _id: -1 } );
  return posts.toArray();
};