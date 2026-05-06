export default async function Comments () {

  await new Promise(resolve => setTimeout(() => resolve("Loading Completed!"), 4000));

  return (
    <div className="flex w-[50%] h-50 border">
      <h1>Comment Page</h1>
      <a href="/salaries">check Salary:-</a>
    </div>
  )
}