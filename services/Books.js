import {enablePromise, openDatabase} from 'react-native-sqlite-storage';


enablePromise(true);
export const getDBConnection = async () => 
{
    return openDatabase({name:'asset-data.db',location:'default'});
}

export const createTable = async (dbObject,tableName) => {
    const query = `Create table if not exists ${tableName} (src Text NOT NULL)`;
    await dbObject.executeSql(query);
}

export const getTodoItems = async (db) => {
    try {
      const todoItems = [];
      const results = await db.executeSql(`SELECT rowid as id,value FROM ${tableName}`);
      results.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
          todoItems.push(result.rows.item(index))
        }
      });
      return todoItems;
    } catch (error) {
      console.error(error);
      throw Error('Failed to get todoItems !!!');
    }
  };



