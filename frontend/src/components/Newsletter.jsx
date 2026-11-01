import DemoForm from './DemoForm'

export default function Newsletter() {
  return (
    <>
      <section className="news">
        <div className="wrap">
          <h2>Don't miss our future updates! Get subscribed today!</h2>
          <p>Traders Expo Johannesburg news &amp; updates</p>
          <DemoForm mode="replace" done={<b>Thanks — you are subscribed.</b>}>
            <input type="email" required placeholder="Email address" />
            <button className="btn btn-pill">Subscribe</button>
          </DemoForm>
        </div>
      </section>
    </>
  )
}
