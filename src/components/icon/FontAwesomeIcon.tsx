import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface IconProps {
    icon: IconDefinition
}

const Icon: React.FC<IconProps> = ({icon}: IconProps)  => {
  return (
    <FontAwesomeIcon icon={icon} />
  )
}

export default Icon