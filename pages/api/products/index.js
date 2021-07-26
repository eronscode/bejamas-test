import db from "../../../utils/db";

export default handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const entries = await db.collection("products").get();
      const entriesData = entries.docs.map((entry) => ({
        id: entry.id,
        ...entry.data(),
      }));
      res.status(200).json(entriesData);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (req.method === "POST") {
    try {
      const { slug } = req.body;
      const entries = await db.collection("products").get();

      const data = await db.collection("products").add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json(data);
    } catch (e) {
      console.log(e);
      res.status(500).json(error);
    }
  }
};
