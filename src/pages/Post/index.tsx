import React from 'react';
import { Box, Button, Skeleton, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { PostParams } from 'routes/types';
import { useStore } from 'stores';
import PostComment from 'components/Comment';
import Post from 'components/Post';


export const PostPage = observer((): JSX.Element => {
	const {postId} = useParams<PostParams>();

	const [commentsLoaded, setCommentsLoaded] = React.useState<boolean>(false);

	const {postStore} = useStore(); 

  	React.useEffect(() => {
		if (postId) {
			void postStore.findPost(Number(postId));
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [postId]);


	const handleLoadComments = (): void => {
		postStore.fetchPostComments().then(() => setCommentsLoaded(true)).catch(err => console.warn('error while loading post comments', err));
	}

	const renderComments = (): JSX.Element => {
		const comments = postStore.comments.get(Number(postId));

		return (
			<Box sx={{marginTop: '40px'}}>
				{!comments || !comments?.length ? (
					<Typography variant='h5'>No comments found for this post...</Typography>
				) : 
					(
						<>
							<Typography sx={{marginBottom: '10px'}} variant='h5'>Post comments:</Typography>
							{comments.map(comment => <PostComment key={comment.id} comment={comment}/>)}
						</>
					)
				}
			</Box>
		);
	}

    return (
    	<>	
			{!postStore.selectedPost ? <Skeleton variant="rounded" width={800} height={100}/> : (
				<>
					<Post post={postStore.selectedPost}/>
					<Box>
						{!commentsLoaded ? (
							<Button sx={{marginTop: '20px'}} variant="contained" onClick={handleLoadComments}>Show comments</Button>
						) : renderComments()}
					</Box>
				</>
			)}
		</>
    )
})

export default PostPage;