import React from 'react';
import './Nav.css';
import NavRightProfile from './NavRightProfile.js'

function NavRight(props) {
    return (

        <div class="x9f619 x1ja2u2z xnp8db0 x112wk31 xnjgh8c xxc7z9f x1t2pt76 x1u2d2a2 x6ikm8r x10wlt62 x7wzq59 xxzkxad x1daaz14">
            <div class="x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf xedcshv x1t2pt76">

                <div class="xb57i2i x1q594ok x5lxg6s x78zum5 xdt5ytf x6ikm8r x1ja2u2z x1pq812k x1rohswg xfk6m8 x1yqm8si xjx87ck x1l7klhg x1iyjqo2 xs83m0k x2lwn1j xx8ngbg xwo3gff x1oyok0e x1odjw0f x1e4zzel x1n2onr6 xq1qtft">
                    <div class="xdt5ytf x78zum5 x1n2onr6 x1iyjqo2">
                        <div class="x1y1aw1k x1vjgj0v">
                            <div class="x1n2onr6">
                                <div class="xwib8y2 x1y1aw1k">
                                    <ul class="x1hc1fzr">

                                        {props.items.map((friends, inx) => (
                                            <NavRightProfile
                                                photo={friends.photo}
                                                name={friends.name}
                                                key={inx}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavRight;