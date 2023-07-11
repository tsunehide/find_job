import { GoogleApis, google } from 'googleapis';
import { Work } from './contents';


const getSheets = () => {
  const googleapis = new GoogleApis();
  const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  const jwt = new googleapis.auth.JWT(
    process.env.GCP_SERVICEACCOUNT_EMAIL,
    undefined,
    (process.env.GCP_SERVICEACCOUNT_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    scopes
  );
  return google.sheets({ version: 'v4', auth: jwt });
};

export const getContents = async (): Promise<Work[]> => {
  const sheets = getSheets();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'contents',
  });
  const rows = response.data.values;
  if (rows) {
    return rows.slice(1).map((row) => {
      return {
        id: row[0],
        name: row[1],
        Elements: row[2],
        salary: row[3],
        time: row[4],
        people: row[5],
        place: row[6],
        require: row[7],
      };
    });
  }
  return [];
};
