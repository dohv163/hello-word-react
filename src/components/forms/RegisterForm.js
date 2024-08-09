import React from "react";


class RegisterForm extends React.Component {

    state = {
        username: '',
        email: '',
        phone: '',
        construction: ''
    }

    handleSubmit = (e) => {

        e.preventDefault();

        console.log(this.state)
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }


    render() {

        const {username, email, phone, construction} = this.state

        return (
            <div className="register_form">
                <h2>Come with our</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Tên của bạn</label> <br/>
                        <input type="text" name="username" placeholder="Tên" value={username} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email hợp lệ nhận thông báo từ chúng tôi</label> <br/>
                        <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="phone"> Số điện thoại </label> <br/>
                        <input type="text" name="phone" placeholder="Số điện thoại" value={phone} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="construction"> Chúng tôi luôn ghi nhận ý kiến đóng góp của bạn </label> <br/>
                        <textarea type="text" name="construction" placeholder="Ý kiến của bạn" value={construction}
                                  onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }


}

export default RegisterForm