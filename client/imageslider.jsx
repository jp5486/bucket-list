Slider = React.createClass({


	render (){
		return (

		<ul className="slides">
    <input type="radio" name="radio-btn" id="img-1" defaultChecked />
    <li className="slide-container">
		<div className="slide">
			<img src="https://images.unsplash.com/photo-1440557958969-404dc361d86f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=345041c7171b59be6312c9ff0525c3df"/>
        </div>
		<div className="nav">
			<label htmlFor="img-6" className="prev">&#x2039;</label>
			<label htmlFor="img-2" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-2" />
    <li className="slide-container">
        <div className="slide">
        	<img src="https://images.unsplash.com/photo-1445455993942-545627632166?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=fd41e8f19107652e45e1bdc35df3a92b" />
        </div>
		<div className="nav">
			<label htmlFor="img-1" className="prev">&#x2039;</label>
			<label htmlFor="img-3" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-3" />
    <li className="slide-container">
        <div className="slide">
        	<img src="https://images.unsplash.com/photo-1418807817813-5847a371f1dd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=677b72c8297a74d05b773e483dbd8f85"/>
        </div>
		<div className="nav">
			<label htmlFor="img-2" className="prev">&#x2039;</label>
			<label htmlFor="img-4" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-4" />
    <li className="slide-container">
        <div className="slide">
        	<img src="https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=9580e27795d8af74b7ea143e70a71636"/>
        </div>
		<div className="nav">
			<label htmlFor="img-3" className="prev">&#x2039;</label>
			<label htmlFor="img-5" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-5" />
    <li className="slide-container">
        <div className="slide">
        	<img src="https://images.unsplash.com/photo-1443916765281-9937110585db?crop=entropy&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425" />
        </div>
		<div className="nav">
			<label htmlFor="img-4" className="prev">&#x2039;</label>
			<label htmlFor="img-6" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-6" />
    <li className="slide-container">
        <div className="slide">
					<img src="https://images.unsplash.com/photo-1428434828181-9d110c490087?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=74f120a985f4e5a45dea5966f5dce182"/>        
        </div>
		<div className="nav">
			<label htmlFor="img-5" className="prev">&#x2039;</label>
			<label htmlFor="img-1" className="next">&#x203a;</label>
		</div>
    </li>

    <li className="nav-dots">
      <label htmlFor="img-1" className="nav-dot" id="img-dot-1"></label>
      <label htmlFor="img-2" className="nav-dot" id="img-dot-2"></label>
      <label htmlFor="img-3" className="nav-dot" id="img-dot-3"></label>
      <label htmlFor="img-4" className="nav-dot" id="img-dot-4"></label>
      <label htmlFor="img-5" className="nav-dot" id="img-dot-5"></label>
      <label htmlFor="img-6" className="nav-dot" id="img-dot-6"></label>
    </li>
</ul>
		)

	}

})