const Total = (data) => {
	let parts = data.parts;
	var count = 0;
	
	parts.filter((list)=>{
		return count +=  list.exercises 
	})

	return (
		<div>
			<p>Total Number of exercises: {count}</p>
		</div>
	)
};

export default Total;