/**
 * Call a stored procedure using Sequelize query method
 * @author Rahul om <rahulom666@gmail.com>
 */

const db = require("../dbconnection");
const util = require("util");
class Querycaller {
  constructor(name, params,db1) {
    this.db=db1;
    this.name = name;
    this.params = params;
    this.buildQuery();

  }

  /**
   * Build the Stored procedure query
   */
  buildQuery() {
    this.query = this.name;
    
  }

  /**
   * Excute and get the results
   */
  result() {
    let params = this.params;
    // for (const key in params) {
    //   if (!params[key] && typeof params[key] === "undefined") {
    //     params[key] = null;
    //   }
    //   if (util.isObject(params[key]) && !Array.isArray(params[key])) {
    //     params[key] = JSON.stringify(params[key]);
    //   }
    //   if (Array.isArray(params[key])) {
    //     if (params[key][0] && util.isObject(params[key][0])) {
    //       params[key] = JSON.stringify(params[key]);
    //     }
    //   }
    // }

    return new Promise((res, rej) => {
     //console.log(this.query,params);
      const dbCall=(this.db1)?this.db1:db;
      dbCall.query(this.query, params, (er, s) => {
        if (er) {
          //console.log(er);
          rej(er);
        } else {
            //console.log(s);
          res(s[0]);
        }
      });
    });
  }
}
module.exports = Querycaller;
