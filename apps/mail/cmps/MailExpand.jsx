const { Fragment, useState } = React

export const MailExpand = ({ mail }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <li onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}> </li>
  )
}
