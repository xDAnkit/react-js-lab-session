import PocketBase from "pocketbase";
import { useEffect } from "react";
import { render } from "react-dom";

const client = new PocketBase("http://127.0.0.1:8090");

const PocketSample = () => {
  useEffect(() => {
    const loadData = async () => {
      await client.admins.authViaEmail("xdankitjain@gmail.com", "1234567890");

      // fetch a paginated records list
      const resultList = await client.records.getList("orders", 1, 50, {
        filter: 'created >= "2022-01-01 00:00:00"',
      });
      console.log("@AJ collections: ", resultList);

      // alternatively you can also fetch all records at once via getFullList:
      const records = await client.records.getFullList(
        "orders",
        200 /* batch size */,
        {
          sort: "-created",
        }
      );
      console.log("@AJ records: ", records);
    };

    loadData();
  }, []);
  return <>I'm a Pocketbase</>;
};

export default PocketSample;
