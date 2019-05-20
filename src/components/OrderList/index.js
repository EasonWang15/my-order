import React, { Component } from 'react'
import OrderItem from '../OrderItem'

const data = [{
  "id":1,
  "shop":"院落创意菜",
  "picture":"//p1.meituan.net/200.0/deal/da7afcd19d55f06361fa72b5e2bcef9c58001.jpg@113_0_674_674a%7C267h_267w_2e_90Q",
  "product":"百香果（冷饮）1扎",
  "price":19.9,
  "ifCommented":false
},{
  "id":2,
  "shop":"正一味",
  "picture":"//p1.meituan.net/200.0/deal/8d0bc8a87c7cba669867677c0bd4d103722784.jpg@799_0_3541_3541a%7C267h_267w_2e_90Q",
  "product":"肥牛石锅拌饭+鸡蛋羹一份",
  "price":25,
  "ifCommented":false
},{
  "id":3,
  "shop":"冻酸奶",
  "picture":"//p0.meituan.net/200.0/deal/3cb53dc8baf2f8c50065551d69da0339277422.jpg@180_0_1080_1080a%7C267h_267w_2e_90Q",
  "product":"冻酸奶（小杯)一杯",
  "price":8,
  "ifCommented":false
},{
  "id":4,
  "shop":"吉野家",
  "picture":"//p0.meituan.net/200.0/deal/dc9be0c28875a4603733533a0be0515e487009.jpg@232_0_615_615a%7C267h_267w_2e_90Q",
  "product":"鸡汁烧鱼+中杯汽水/紫菜蛋花汤",
  "price":20,
  "ifCommented":false
}]

class OrderList extends Component {
	constructor (props) {
		super(props)
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		this.setState({
			data: data
		})
	}
	handleSubmit = (id, value, stars) => {
		let arr = this.state.data
		arr.map(item => {
			return item.id === id ? (item.ifCommented = true) : item
		})
		this.setState({
			data: arr
		})
	}
	render() {
		return (
			<div className="order-list">
				{
					this.state.data.map(item => {
						return <OrderItem key={item.id} data={item} onSubmit={this.handleSubmit} />
					})
				}
			</div>
		)
	}
}

export default OrderList;