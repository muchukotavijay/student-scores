import axios from 'axios';

// export default axios.create({
//     baseURL: 'https://pearson-bronte-interview.s3.ap-southeast-2.amazonaws.com/students.json'
// });

export default axios.create({
    baseURL: 'students.json'
});
