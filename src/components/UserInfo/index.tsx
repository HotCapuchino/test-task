import { Grid, SxProps, Theme, Typography } from '@mui/material';
import { UserModel } from 'api/models/UserModel';
import UserLabel from 'components/Label';

interface UserInfoProps {
	user: UserModel;
	sx?: SxProps<Theme>
}

const UserInfo = (props: UserInfoProps): JSX.Element => {
	const {user, sx} = props;

	return (
		<Grid sx={sx} container spacing={0}>
			<Grid item xs={1}>
				<Typography>Name:</Typography>
			</Grid>
			<Grid item xs={11}>
				<Typography>{user?.name}</Typography>
			</Grid>

			<Grid item xs={1}>
				<Typography>Email:</Typography>
			</Grid>
			<Grid item xs={11}>
				<Typography>{user?.email}</Typography>
			</Grid>

			<Grid item xs={1}>
				<Typography>Gender:</Typography>
			</Grid>
			<Grid item xs={11} sx={{marginBottom: '10px'}}>
				<UserLabel value={user?.gender}/>
			</Grid>

			<Grid item xs={1}>
				<Typography>Status:</Typography>
			</Grid>
			<Grid item xs={11}>
				<UserLabel value={user?.status}/>
			</Grid>
		</Grid>
	)
}

export default UserInfo