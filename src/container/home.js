import React, { useState } from "react";
import { Container, Button, AppBar,Toolbar, IconButton, Badge, Menu} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AllDetailPage from '../components/all_content/all_content';

function Home(){
	const emailName = localStorage.getItem('emailName');
	const [itemCount, setItemCount] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null);
	const isMenuOpen = Boolean(anchorEl);
	
	const signOutMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const signOutMenuClose = () => {
		setAnchorEl(null);
	};
	
	const onSignOut = ()=> {
		localStorage.removeItem('myData');
        
    }
	
	const menuId = 'primary-search-account-menu';
	const signOutMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={signOutMenuClose}
		>
			<Button 
				onClick={onSignOut}
				style={{textTransform:"none", float:"right"}}
				variant="contained"
				color="inherit"
				href="/login"
				required>
				Sign Out
			</Button>
		</Menu>
	);
	
	
	return(
		<Container>
			<div style={{flexGrow:"1"}}>
				<AppBar position="static" color="secondary">
					<Toolbar>
						<h2>{emailName}</h2>
						<div style={{flexGrow:"1"}} />
						<div>
							<IconButton aria-label="show 4 new mails" color="inherit">
							  <Badge badgeContent={4} >
								<MailIcon />
							  </Badge>
							</IconButton>
							
							<IconButton aria-label="show 17 new notifications" color="inherit">
							  <Badge badgeContent={itemCount} >
								<ShoppingCartIcon  />
							  </Badge> 
							</IconButton>
							
							<IconButton
								edge="end"
								aria-label="account of current user"
								aria-controls={menuId}
								aria-haspopup="true"
								onClick={signOutMenuOpen}
								color="inherit"
							>
								<Badge color="secondary">
									<ExitToAppIcon />
								</Badge> 
							</IconButton>

						</div> 
					</Toolbar>
				</AppBar>
				{signOutMenu}
				<AllDetailPage/>
			</div>
		</Container>
	)
}

export default Home;