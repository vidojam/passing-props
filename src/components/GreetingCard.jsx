export default function GreetingCard(firstName, age) {
  // const {firstName} = props
  return (
    <div className="GreetingCard">
      <h3>Hello {firstName}({age})!</h3>
    </div>
  )
}