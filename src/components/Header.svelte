<script>
    import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'sveltestrap';

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<header>
    <Navbar class="fixed-top" color="light" light expand="md">
        <div class="container">
            <NavbarBrand href="/">
                <img style="height:64px; border-radius:10px" src="/image/logo.jpg" alt=""> <b>NooBee</b>Ncrypt
            </NavbarBrand>
            <NavbarToggler on:click={() => (isOpen = !isOpen)} />
            <Collapse {isOpen} navbar expand="md" >
              <Nav class="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/bestguy/sveltestrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>Options</DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
        </div>
      </Navbar>
</header>

<style>
</style>