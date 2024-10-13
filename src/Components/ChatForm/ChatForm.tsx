
const ChatForm = () => {
  return (
    <div className="">
      <form>
        <div className="input-group mb-5 position-fixed bottom-0 w-75">
          <textarea className="form-control" placeholder="Recipient's username"
                 aria-label="Recipient's username"
                 aria-describedby="button-addon2"/>
          <button className="btn btn-primary" type="button" id="button-addon2">Button</button>
        </div>
      </form>
    </div>
  );
};

export default ChatForm;