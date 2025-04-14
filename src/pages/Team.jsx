import React from 'react'

const Team = (props) => {
	const username = props.employeeData ? props.employeeData.name : 'Admin';
	const userImage = props.employeeData?.image ? props.employeeData.image: "https://images.unsplash.com/photo-1697811599461-38124b3decc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHN1aXR8ZW58MHwxfDB8fHww";

  return (
    <section className="py-6 dark:bg-gray-100 text-gray-100">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl ">Our team</h1>
		<p className="max-w-2xl text-center dark:text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={userImage} />
				<p className="text-xl font-semibold leading-tight">{username}</p>
				<p className="dark:text-gray-600">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={userImage} />
				<p className="text-xl font-semibold leading-tight">{username}</p>
				<p className="dark:text-gray-600">Visual Designer</p>
			</div>
		</div>
	</div>
</section>
  )
}

export default Team