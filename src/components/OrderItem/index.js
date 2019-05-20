import React, { Component } from 'react'
import './style.css'

class OrderItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showComment: false,
			stars: 0,
			value: ""
		}
	}
	handleShowComment = () => {
		this.setState({
			showComment: true
		})
	}
	handleChangeValue = (e) => {
		this.setState({
			value: e.target.value
		})
	}
	handleStars(stars) {
		this.setState({
			stars: stars
		})
	}
	handleCancel = () => {
		this.setState({
			showComment: false,
			stars: 0,
			value: ""
		})
	}
	handleSubmit = () => {
		const { stars, value } = this.state,
						{ id } = this.props.data;
		this.setState({
			showComment: false,
			stars: 0,
			value: ""
		})
		this.props.onSubmit(id, value, stars);
		alert("提交成功！");
	}
	render() {
		const { shop, picture, product, price, ifCommented } = this.props.data;
		return (
			<div className="order-item">
				<div className="order-item-box">
					<div className="order-item-pic">
						<img src={picture} alt=""/>
					</div>
					<div className="order-item-cont">
						<h2 className="order-item-title">{shop}</h2>
						<p className="order-item-text">{product}</p>
						<p className="order-item-price">${price}</p>
					</div>
					<div className="order-item-btns">
						{
							ifCommented ? (
								<button className="btn btn-grey">已评价</button>
							) : (
								<button className="btn btn-red" onClick={this.handleShowComment}>评价</button>
							)
						}
					</div>
				</div>
				{
					this.state.showComment ? this.renderOrderItemComment() : ""
				}
			</div>
		)
	}
	renderOrderItemComment() {
		return (
			<div className="order-item-comment">
				<textarea value={this.state.value} onChange={this.handleChangeValue}></textarea>
				<div className="order-item-stars">
					{
						[1, 2, 3, 4, 5].map((item, index) => {
							return <span className={this.state.stars >= item ? "color-red" : ""} key={index} onClick={this.handleStars.bind(this, item)}>★</span>
						})
					}
				</div>
				<div className="order-item-comment-btns">
					<button className="btn btn-red" onClick={this.handleSubmit}>提交</button>
					<button className="btn btn-grey" onClick={this.handleCancel}>取消</button>
				</div>
			</div>
		)
	}
}

export default OrderItem;