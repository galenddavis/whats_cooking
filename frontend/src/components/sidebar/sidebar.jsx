import RecipeForm from '../recipes/recipes_container';


const Sidebar = () => {

    return (
        <nav className='sidebar-parent'>
            <div className='welcome'>
                <h1>What's in the fridge?</h1>
            </div>
            <span></span>
            <RecipeForm />
        </nav>
    )
}

export default Sidebar