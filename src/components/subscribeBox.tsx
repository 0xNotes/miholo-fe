
export default function SubscribeBox() {
    return (
        <form className="SubscribeBox">
            <div>
                <input className="InputText" type="email" placeholder="your email..." name="name" />
            </div>
            <div>
                <input className="SubmitButton" type="submit" value="Subscribe" />
            </div>
        </form>
    );
}