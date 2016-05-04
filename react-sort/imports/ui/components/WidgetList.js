import React from 'react';

class WidgetList extends React.Component {
  constructor(props) {
    super(props);
    this.changeSortOrder = this.changeSortOrder.bind(this);
  }

  changeSortOrder(event) {
    event.preventDefault();
    this.props.sort.set(
      this.props.sort.get() === 1 ? -1 : 1
    );
  }

  render() {
    let widgetContent = [];
    this.props.allWidgets.forEach((widget) => {
      widgetContent.push(
        <li key={widget._id}>{widget.name}</li>
      );
    });
    return (
      <div className="widgets">
        <a href="#" onClick={this.changeSortOrder}>Change sort order</a>
        <ul>
          {widgetContent}
        </ul>
      </div>
    );
  }
}

WidgetList.propTypes = {
  allWidgets: React.PropTypes.array,
  sort: React.PropTypes.object,
};

export default WidgetList;
