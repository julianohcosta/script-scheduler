import './MenuItem.css'

const MenuItem = props => {
  return (
    <>
      <li className='sidebar-list-item' onClick={(event) => props.onClick(event)}>
                <span className='sidebar-list-item-icon'>
                    {props.icon}
                </span>
        <div className='list--item-text my-1'>
          {props.text}
        </div>
      </li>
    </>
  )
};

export default MenuItem;