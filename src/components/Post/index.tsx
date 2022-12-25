import { Typography } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import { PostModel } from 'api/models/PostModel';

interface PostProps {
    post: PostModel;
}

export const Post = (props: PostProps): JSX.Element => {
    const {post} = props;

    return (
        <Card className='post-block'>
            <CardContent>
                <Typography variant='h6' sx={{fontWeight: 'bold'}}>{post?.title}</Typography>
                <Typography>{post?.body}</Typography>
            </CardContent>
        </Card>
    )
}

export default Post;