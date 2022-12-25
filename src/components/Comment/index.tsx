import { Card, CardContent, Typography } from '@mui/material';
import { CommentModel } from 'api/models/CommentModel';

interface PostCommentProps {
    comment: CommentModel;
}

const PostComment = (props: PostCommentProps): JSX.Element => {
    const {comment} = props;

    return (
        <Card sx={{marginBottom: '10px', width: '600px', backgroundColor: 'wheat'}}>
            <CardContent>
                <Typography sx={{marginBottom: '10px'}}>{comment.body}</Typography>
                <Typography sx={{fontSize: '12px'}}>Author: <b>{comment.name}</b></Typography>
                <Typography sx={{fontSize: '12px'}}>Author email: <b>{comment.email}</b></Typography>
            </CardContent>
        </Card>
    )
}

export default PostComment;