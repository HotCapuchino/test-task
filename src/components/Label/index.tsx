import { Box } from '@mui/material';
import { classNames } from 'helpers/classnames';
import './styles';

interface UserLabelProps {
    value: Gender | OnlineActivity;
}

const UserLabel = (props: UserLabelProps): JSX.Element => {
    const {value} = props;

    return <Box className={classNames('user-label', `user-label_${value}`)}>{value}</Box>;
}

export default UserLabel;