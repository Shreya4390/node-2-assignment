import axios from 'axios';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import moment from 'moment';
/* eslint-disable import/first */
require('dotenv').config();

export default async function importfiledata() {
  axios.get(process.env.URI)
    .then((response) => {
      if (_.isObject(response)) {
        const data = JSON.stringify(response.data);
        const CurrentDate = moment().unix();
        fs.appendFile(
          path.join(__dirname, `/../output/${CurrentDate}_employee_1.txt`),
          data,
          'utf8',
          // Callback function
          (err) => {
            if (err) {
              throw err;
            }
            // file created
            // eslint-disable-next-line no-console
            console.log('Data is appended to file successfully.');
          },
        );
      }
    })
    .catch((error) => {
      // handle error
      // eslint-disable-next-line no-console
      console.log(error);
    });
}
