import React from 'react';
import './Nav.css';

function NavRightProfile(props) {
    return (
        <li>
            <div class= "x6s0dn4 b-bss b-bw0 b-rss b-rw0 b-lss b-lw0 b-tss b-tw0 x9f619 x78zum5 x1q0g3np x1iyjqo2 xs83m0k x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r xeuugli x18d9i69 x1sxyh0 xurb0ha xexx8yu x1n2onr6 x1ja2u2z x1gg8mnh">
                <div class="x78zum5 xdt5ytf xq8finb x1xmf6yo x1e56ztr x1n2onr6 xqcrz7y x1ywmky0 xnd27nj xv2ei83 x1og3r51 xv3fwf9">
                    <div class="x1rg5ohu x1n2onr6 x3ajldb x1ja2u2z">
                        <img style={{ height: '36px', width: '36px' }} src={props.photo}>
                        </img>
                    </div>
                </div>
                <div class="x6s0dn4 xkh2ocl b-bss b-bw0 b-rss b-rw0 b-lss b-lw0 b-tss b-tw0 x9f619 x78zum5 x1q0g3np x1iyjqo2 xs83m0k x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x18d9i69 x4uap5 xkhd6sd xexx8yu x1n2onr6 x1ja2u2z">{props.name}</div>
            </div>
        </li>
    );
}

export default NavRightProfile;