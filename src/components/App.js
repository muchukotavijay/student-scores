import React, { useState, useEffect } from 'react';

import './App.css'
import scores from '../apis/scores';

const App = () => {

	const [studentScores, setStudentScores] = useState([]);

	useEffect(() => {
		// fetch('https://pearson-bronte-interview.s3.ap-southeast-2.amazonaws.com/students.json').then((res)=> {
		// 	console.log(res);
		// }).catch(err => {
		// 	console.log(err);
		// })
		getStudentScores()
	}, [])

	const getStudentScores = async () => {
		const response = await scores.get();
		console.log(response.data);
		setStudentScores(response.data);
	}

	const getStudentScoreComp = (studentScores) => {
		return studentScores.map(
				studentScore => (
					<div key={studentScore.id} className={`flex-container ${studentScore.lessonScore < 35 ? "red" : ""}`}>
						<span className='name flex-left'>{studentScore.firstName}  {studentScore.lastName}</span>
						<span className='score flex-righ'>{studentScore.lessonScore}</span>
					</div>
				)
			);
	}

	return (
		<div className="container">
			{getStudentScoreComp(studentScores)}
		</div>
	)
}

export default App;
