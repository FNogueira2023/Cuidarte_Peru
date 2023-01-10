import React, { Component } from "react";
import '../public/stylesheets/newsletter.css';

class Newsletter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: false
    };
  }

  handleChange(value) {
    this.setState({
      email: value,
      error: false
    });
  }

  handleSubmit() {
    const { email } = this.state;
    const error = !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
      email
    );

    if (error) {
      this.setState({ error });
    } else {
      console.log(email);
    }
  }

  render() {
    const { email, error } = this.state;

    return (
      <section className="newsletter">
        <div className="newsletter-container">

          <h4>¡Subscríbite para recibir nuestras mejores ofertas!</h4>


          <div>
            <input
              className={error ? "error" : ""}
              type="text"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={e => {
                this.handleChange(e.target.value);
              }}
            />
            <button
              onClick={() => {
                this.handleSubmit();
              }}
            >
              Subscribirme
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
