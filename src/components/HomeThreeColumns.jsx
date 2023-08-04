import '../scss/HomeThreeColumns.scss'
function HomeThreeColumns() {
    return (
        <>

            <div className='main-section'>
                <div className='data-item'>
                    <h2 className='data-item__number'>10</h2>
                    <h3 className='data-item__title'>ODDANYCH WORKÓW</h3>
                    <p className='data-item__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='data-item'>
                    <h2 className='data-item__number'>5</h2>
                    <h3 className='data-item__title'>WSPARTYCH ORGANIZACJI</h3>
                    <p className='data-item__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='data-item'>
                    <h2 className='data-item__number'>7</h2>
                    <h3 className='data-item__title'>ZORGANIZOWANYCH ZBIÓREK</h3>
                    <p className='data-item__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

        </>
    );
}

export default HomeThreeColumns;