document.addEventListener("DOMContentLoaded", function () {
    const replyButtons = document.querySelectorAll(".reply-btn");
    const commentFormHTML = `
<div class="comment-item">
    <div class="item-img">
        <img
        src="./assets/img/profile/profile-1.webp"
        alt="profile"
        />
    </div>
    <form class="comment-form">
        <div class="comment-input-wrap">
        <input
            type="text"
            class="comment-input"
            placeholder="Write a comment..."
            required
        />
        <button
            type="button"
            class="emoji-btn"
        >
            😊
        </button>
        </div>
        <div  class="emoji-picker">
        <span class="emoji bem-grinning">😀 </span
        ><span class="emoji bem-grin">😁 </span
        ><span class="emoji bem-joy">😂 </span
        ><span class="emoji bem-rofl">🤣 </span
        ><span class="emoji bem-smiley">😃 </span
        ><span class="emoji bem-smile">😄 </span
        ><span class="emoji bem-sweat_smile">😅 </span
        ><span class="emoji bem-laughing">😆 </span
        ><span class="emoji bem-wink">😉 </span
        ><span class="emoji bem-blush">😊 </span
        ><span class="emoji bem-yum">😋 </span
        ><span class="emoji bem-sunglasses">😎 </span
        ><span class="emoji bem-heart_eyes">😍 </span
        ><span class="emoji bem-kissing_heart">😘 </span
        ><span class="emoji bem-kissing">😗 </span
        ><span class="emoji bem-kissing_smiling_eyes"
            >😙 </span
        ><span class="emoji bem-kissing_closed_eyes"
            >😚 </span
        ><span class="emoji bem-slight_smile">🙂 </span
        ><span class="emoji bem-hugging">🤗 </span
        ><span class="emoji bem-thinking">🤔 </span
        ><span class="emoji bem-neutral_face">😐 </span
        ><span class="emoji bem-expressionless"
            >😑 </span
        ><span class="emoji bem-no_mouth">😶 </span
        ><span class="emoji bem-rolling_eyes">🙄 </span
        ><span class="emoji bem-smirk">😏 </span
        ><span class="emoji bem-persevere">😣 </span
        ><span class="emoji bem-disappointed_relieved"
            >😥 </span
        ><span class="emoji bem-open_mouth">😮 </span
        ><span class="emoji bem-zipper_mouth">🤐 </span
        ><span class="emoji bem-hushed">😯 </span
        ><span class="emoji bem-sleepy">😪 </span
        ><span class="emoji bem-tired_face">😫 </span
        ><span class="emoji bem-sleeping">😴 </span
        ><span class="emoji bem-relieved">😌 </span
        ><span class="emoji bem-nerd">🤓 </span
        ><span class="emoji bem-stuck_out_tongue"
            >😛 </span
        ><span
            class="emoji bem-stuck_out_tongue_winking_eye"
            >😜 </span
        ><span
            class="emoji bem-stuck_out_tongue_closed_eyes"
            >😝 </span
        ><span class="emoji bem-drooling_face">🤤 </span
        ><span class="emoji bem-unamused">😒 </span
        ><span class="emoji bem-sweat">😓 </span
        ><span class="emoji bem-pensive">😔 </span
        ><span class="emoji bem-confused">😕 </span
        ><span class="emoji bem-upside_down">🙃 </span
        ><span class="emoji bem-money_mouth">🤑 </span
        ><span class="emoji bem-astonished">😲 </span
        ><span class="emoji bem-slight_frown">🙁 </span
        ><span class="emoji bem-confounded">😖 </span
        ><span class="emoji bem-disappointed">😞 </span
        ><span class="emoji bem-worried">😟 </span
        ><span class="emoji bem-triumph">😤 </span
        ><span class="emoji bem-cry">😢 </span
        ><span class="emoji bem-sob">😭 </span
        ><span class="emoji bem-frowning">😦 </span
        ><span class="emoji bem-anguished">😧 </span
        ><span class="emoji bem-fearful">😨 </span
        ><span class="emoji bem-weary">😩 </span
        ><span class="emoji bem-grimacing">😬 </span
        ><span class="emoji bem-cold_sweat">😰 </span
        ><span class="emoji bem-scream">😱 </span
        ><span class="emoji bem-flushed">😳 </span
        ><span class="emoji bem-dizzy_face">😵 </span
        ><span class="emoji bem-rage">😡 </span
        ><span class="emoji bem-angry">😠 </span
        ><span class="emoji bem-innocent">😇 </span
        ><span class="emoji bem-cowboy">🤠 </span
        ><span class="emoji bem-clown">🤡 </span
        ><span class="emoji bem-lying_face">🤥 </span
        ><span class="emoji bem-mask">😷 </span
        ><span class="emoji bem-thermometer_face"
            >🤒 </span
        ><span class="emoji bem-head_bandage">🤕 </span
        ><span class="emoji bem-nauseated_face"
            >🤢 </span
        ><span class="emoji bem-sneezing_face">🤧 </span
        ><span class="emoji bem-smiling_imp">😈 </span
        ><span class="emoji bem-imp">👿 </span
        ><span class="emoji bem-japanese_ogre">👹 </span
        ><span class="emoji bem-japanese_goblin"
            >👺 </span
        ><span class="emoji bem-skull">💀 </span
        ><span class="emoji bem-ghost">👻 </span
        ><span class="emoji bem-alien">👽 </span
        ><span class="emoji bem-robot">🤖 </span
        ><span class="emoji bem-poop">💩 </span
        ><span class="emoji bem-smiley_cat">😺 </span
        ><span class="emoji bem-smile_cat">😸 </span
        ><span class="emoji bem-joy_cat">😹 </span
        ><span class="emoji bem-heart_eyes_cat"
            >😻 </span
        ><span class="emoji bem-smirk_cat">😼 </span
        ><span class="emoji bem-kissing_cat">😽 </span
        ><span class="emoji bem-scream_cat">🙀 </span
        ><span class="emoji bem-crying_cat_face"
            >😿 </span
        ><span class="emoji bem-pouting_cat">😾 </span
        ><span class="emoji bem-boy">👦 </span
        ><span class="emoji bem-girl">👧 </span
        ><span class="emoji bem-man">👨 </span
        ><span class="emoji bem-woman">👩 </span
        ><span class="emoji bem-older_man">👴 </span
        ><span class="emoji bem-older_woman">👵 </span
        ><span class="emoji bem-baby">👶 </span
        ><span class="emoji bem-angel">👼 </span
        ><span class="emoji bem-cop">👮 </span
        ><span class="emoji bem-spy">🕵 </span
        ><span class="emoji bem-guardsman">💂 </span
        ><span class="emoji bem-construction_worker"
            >👷 </span
        ><span class="emoji bem-man_with_turban"
            >👳 </span
        ><span class="emoji bem-person_with_blond_hair"
            >👱 </span
        ><span class="emoji bem-santa">🎅 </span
        ><span class="emoji bem-mrs_claus">🤶 </span
        ><span class="emoji bem-princess">👸 </span
        ><span class="emoji bem-prince">🤴 </span
        ><span class="emoji bem-bride_with_veil"
            >👰 </span
        ><span class="emoji bem-man_in_tuxedo">🤵 </span
        ><span class="emoji bem-pregnant_woman"
            >🤰 </span
        ><span class="emoji bem-man_with_gua_pi_mao"
            >👲 </span
        ><span class="emoji bem-person_frowning"
            >🙍 </span
        ><span
            class="emoji bem-person_with_pouting_face"
            >🙎 </span
        ><span class="emoji bem-no_good">🙅 </span
        ><span class="emoji bem-ok_woman">🙆 </span
        ><span class="emoji bem-information_desk_person"
            >💁 </span
        ><span class="emoji bem-raising_hand">🙋 </span
        ><span class="emoji bem-bow">🙇 </span
        ><span class="emoji bem-face_palm">🤦 </span
        ><span class="emoji bem-shrug">🤷 </span
        ><span class="emoji bem-massage">💆 </span
        ><span class="emoji bem-haircut">💇 </span
        ><span class="emoji bem-walking">🚶 </span
        ><span class="emoji bem-runner">🏃 </span
        ><span class="emoji bem-dancer">💃 </span
        ><span class="emoji bem-man_dancing">🕺 </span
        ><span class="emoji bem-dancers">👯 </span
        ><span class="emoji bem-speaking_head">🗣 </span
        ><span class="emoji bem-bust_in_silhouette"
            >👤 </span
        ><span class="emoji bem-busts_in_silhouette"
            >👥 </span
        ><span class="emoji bem-couple">👫 </span
        ><span class="emoji bem-two_men_holding_hands"
            >👬 </span
        ><span class="emoji bem-two_women_holding_hands"
            >👭 </span
        ><span class="emoji bem-couplekiss">💏 </span
        ><span class="emoji bem-couple_with_heart"
            >💑 </span
        ><span class="emoji bem-family">👪 </span
        ><span class="emoji bem-muscle">💪 </span
        ><span class="emoji bem-selfie">🤳 </span
        ><span class="emoji bem-point_left">👈 </span
        ><span class="emoji bem-point_right">👉 </span
        ><span class="emoji bem-point_up">☝ </span
        ><span class="emoji bem-point_up_2">👆 </span
        ><span class="emoji bem-middle_finger">🖕 </span
        ><span class="emoji bem-point_down">👇 </span
        ><span class="emoji bem-v">✌ </span
        ><span class="emoji bem-fingers_crossed"
            >🤞 </span
        ><span class="emoji bem-vulcan">🖖 </span
        ><span class="emoji bem-metal">🤘 </span
        ><span class="emoji bem-call_me">🤙 </span
        ><span class="emoji bem-hand_splayed">🖐 </span
        ><span class="emoji bem-raised_hand">✋ </span
        ><span class="emoji bem-ok_hand">👌 </span
        ><span class="emoji bem-thumbsup">👍 </span
        ><span class="emoji bem-thumbsdown">👎 </span
        ><span class="emoji bem-fist">✊ </span
        ><span class="emoji bem-punch">👊 </span
        ><span class="emoji bem-left_facing_fist"
            >🤛 </span
        ><span class="emoji bem-right_facing_fist"
            >🤜 </span
        ><span class="emoji bem-raised_back_of_hand"
            >🤚 </span
        ><span class="emoji bem-wave">👋 </span
        ><span class="emoji bem-clap">👏 </span
        ><span class="emoji bem-writing_hand">✍ </span
        ><span class="emoji bem-open_hands">👐 </span
        ><span class="emoji bem-raised_hands">🙌 </span
        ><span class="emoji bem-pray">🙏 </span
        ><span class="emoji bem-handshake">🤝 </span
        ><span class="emoji bem-nail_care">💅 </span
        ><span class="emoji bem-ear">👂 </span
        ><span class="emoji bem-nose">👃 </span
        ><span class="emoji bem-footprints">👣 </span
        ><span class="emoji bem-eyes">👀 </span
        ><span class="emoji bem-eye">👁 </span
        ><span class="emoji bem-tongue">👅 </span
        ><span class="emoji bem-lips">👄 </span
        ><span class="emoji bem-kiss">💋 </span
        ><span class="emoji bem-zzz">💤 </span
        ><span class="emoji bem-eyeglasses">👓 </span
        ><span class="emoji bem-dark_sunglasses"
            >🕶 </span
        ><span class="emoji bem-necktie">👔 </span
        ><span class="emoji bem-shirt">👕 </span
        ><span class="emoji bem-jeans">👖 </span
        ><span class="emoji bem-dress">👗 </span
        ><span class="emoji bem-kimono">👘 </span
        ><span class="emoji bem-bikini">👙 </span
        ><span class="emoji bem-womans_clothes"
            >👚 </span
        ><span class="emoji bem-purse">👛 </span
        ><span class="emoji bem-handbag">👜 </span
        ><span class="emoji bem-pouch">👝 </span
        ><span class="emoji bem-school_satchel"
            >🎒 </span
        ><span class="emoji bem-mans_shoe">👞 </span
        ><span class="emoji bem-athletic_shoe">👟 </span
        ><span class="emoji bem-high_heel">👠 </span
        ><span class="emoji bem-sandal">👡 </span
        ><span class="emoji bem-boot">👢 </span
        ><span class="emoji bem-crown">👑 </span
        ><span class="emoji bem-womans_hat">👒 </span
        ><span class="emoji bem-tophat">🎩 </span
        ><span class="emoji bem-mortar_board">🎓 </span
        ><span class="emoji bem-helmet_with_cross"
            >⛑ </span
        ><span class="emoji bem-lipstick">💄 </span
        ><span class="emoji bem-ring">💍 </span
        ><span class="emoji bem-closed_umbrella"
            >🌂 </span
        ><span class="emoji bem-briefcase">💼 </span>
        </div>
        <button type="submit" class="btn btn-primary">
        <i
            class="fa-solid fa-paper-plane fa-rotate-by"
            style="--fa-rotate-angle: 45deg"
        ></i>
        পোস্ট
        </button>
    </form>
</div>
  `;

    replyButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Disable the reply button after it's clicked once
            button.disabled = true;

            // Find the nearest comment-item for the clicked button
            const commentItem = button.closest('.comment-item');

            // Insert the comment form into the comment item
            commentItem.insertAdjacentHTML("beforeend", commentFormHTML);

            // Cache selectors for future use
            const commentForm = commentItem.querySelector('.comment-form');
            const emojiBtn = commentForm.querySelector(".emoji-btn");
            const emojiPicker = commentForm.querySelector(".emoji-picker");
            const commentInput = commentForm.querySelector(".comment-input");

            // Ensure the emoji picker is hidden initially
            emojiPicker.style.display = "none";

            // Event listener for emoji button to toggle the emoji picker
            emojiBtn.addEventListener("click", function () {
                emojiPicker.style.display = (emojiPicker.style.display === "none" || !emojiPicker.style.display) ? "block" : "none";
            });

            // Add click listener for each emoji to insert it into the input field
            emojiPicker.addEventListener("click", function (e) {
                if (e.target.classList.contains("emoji")) {
                    commentInput.value += e.target.textContent;
                }
            });
        });
    });


});
