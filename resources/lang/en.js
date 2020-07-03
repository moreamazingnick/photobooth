/* exported L10N */
const L10N = {
    'abort': 'Abort',
    'admin_panel': 'Admin panel',
    'allow_delete': 'Allow deletion of the image',
    'auto_reload': 'Photobooth reloads automatically...',
    'auto_reload_on_error': 'Automatically reload Photobooth on error',
    'available_version': 'Available version',
    'busy': 'Processing',
    'busyCollage': 'Processing Collage',
    'check_version': 'Check version',
    'cheese': 'Cheeeeeeeese!',
    'cheeseCollage': 'Cheeeeeeeese Collageeeeeeeeeee!',
    'chroma_keying': 'Allow chroma keying',
    'close': 'Close',
    'commands': 'Commands',
    'commands_exiftool_cmd': 'EXIFtool command',
    'commands_exiftool_msg': 'Success message for EXIF preservation',
    'commands_print_cmd': 'Print command',
    'commands_print_msg': 'Success message for print',
    'commands_take_picture_cmd': 'Take picture command',
    'commands_take_picture_msg': 'Success message for take picture',
    'continuous_collage': 'Take collage without interruption',
    'crop_onprint': 'Crop picture at print',
    'cups_button': 'Show CUPS button',
    'current_version': 'Current version',
    'default_imagefilter': 'Choose image filter',
    'degrees': '°',
    'delete': 'Delete',
    'dev': 'Dev-Mode',
    'error': 'Something went wrong. Please try it again.',
    'event': 'Event',
    'event_symbol': 'Symbol',
    'event_textLeft': 'Text left',
    'event_textRight': 'Text right',
    'folders': 'Folders',
    'folders_data': 'Data Folder',
    'folders_images': 'Image Folder',
    'folders_keying': 'Keying Folder',
    'folders_print': 'Print Folder',
    'folders_qrcodes': 'QR-Code Folder',
    'folders_thumbs': 'Thumbnail Folder',
    'folders_tmp': 'tmp Folder',
    'force_buzzer': 'Hide trigger button',
    'gallery': 'Gallery',
    'gallery_bottom_bar': 'Show button bar inside gallery on bottom',
    'gallery_date_format': 'Date style',
    'gallery_no_image': 'The gallery is still empty. Take some pictures!',
    'general': 'General',
    'general_camera_mode': 'Camera facing mode',
    'general_cheese_time': 'Cheeeeeeeese!-Timer:',
    'general_cntdwn_time': 'Countdown timer:',
    'general_collage_cntdwn_time': 'Collage-countdown timer:',
    'general_collage_key': 'Key code which triggers a collage',
    'general_db_file': 'Database file name',
    'general_default_imagefilter': 'Default image filter',
    'general_disabled_filters': 'Disabled image filters',
    'general_file_naming': 'File naming',
    'general_ipCamPreviewRotation': 'Rotate preview from URL',
    'general_ipCamURL': 'Preview-URL',
    'general_language': 'Language',
    'general_photo_key': 'Key code which triggers a photo',
    'general_pictureRotation': 'Rotate photo after taking (in degrees)',
    'general_picture_permissions': 'Picture permissions',
    'general_polaroid_rotation': 'Polaroid picture rotation',
    'general_start_screen_subtitle': 'Start screen (subtitle)',
    'general_start_screen_title': 'Start screen (title)',
    'general_take_collage_frame_path': 'Frame',
    'general_take_frame_path': 'Frame',
    'general_time_to_live': 'Show image after capture:',
    'general_videoHeight': 'Device cam picture height',
    'general_videoWidth': 'Device cam picture width',
    'general_webserver_ip': 'IP address of the Photobooth web server',
    'general_wifi_ssid': 'Wireless network name (SSID) used to access the photobooth',
    'home': 'Home',
    'image_preview_before_processing': 'Preload and show image during filter processing',
    'insertMail': 'Enter your e-mail address to receive the photo.',
    'is_event': 'Event',
    'is_textonprint': 'Print text on image',
    'jpeg_quality': 'JPEG quality',
    'jpeg_quality_jpeg_quality_chroma': 'JPEG quality for chroma-keying (-1 ... 100):',
    'jpeg_quality_jpeg_quality_image': 'JPEG quality for images (-1 ... 100):',
    'jpeg_quality_jpeg_quality_thumb': 'JPEG quality for thumbnails (-1 ... 100):',
    'keep_images': 'Keep original images in tmp folder',
    'keyingerror': 'Chroma keying not possible!',
    'language': 'Choose Language',
    'login': 'Login',
    'login_enabled': 'Login enabled',
    'login_invalid': 'Username or password is invalid!',
    'login_password': 'Password',
    'login_username': 'Username',
    'logout': 'Logout',
    'mail': 'E-Mail',
    'mailError': 'Error sending e-mail',
    'mailSaved': 'E-mail address saved successfully',
    'mailSent': 'E-mail sent',
    'mail_file': 'File name e-mail addresses database',
    'mail_fromAddress': 'Return address',
    'mail_fromName': 'Sender name',
    'mail_host': 'E-mail host adress',
    'mail_password': 'Password',
    'mail_port': 'Port',
    'mail_secure': 'Security (tls or ssl)',
    'mail_subject': 'Subject',
    'mail_text': 'Text',
    'mail_username': 'Username of the e-mail account',
    'manual_allow_delete': 'If enabled pictures can be deleted on result page directly after they have been taken.',
    'manual_auto_reload_on_error': 'If an error occurs while taking a picture, Photobooth will reload automatically after 5 seconds.',
    'manual_chroma_keying': 'If enabled, chromakeying can be accessed from gallery for your pictures.',
    'manual_commands_exiftool_cmd': 'EXIFtool command line which is executed after taking a picture if "Preserve EXIF data" is enabled.',
    'manual_commands_exiftool_msg': 'Message returned from EXIFtool commandline.',
    'manual_commands_print_cmd': 'Command line which is executed while pressing the "Print" button.',
    'manual_commands_print_msg': 'Message returned from print command.',
    'manual_commands_take_picture_cmd': 'Command line which is executed while pressing the "Take Pic" button. On Linux you can for example use <a href="http://www.gphoto.org"  target="_blank">gphoto2</a> to take pictures, on Windows you can use <a href="http://digicamcontrol.com"  target="_blank">digiCamControl</a>.',
    'manual_commands_take_picture_msg': 'Message returned from take picture command.',
    'manual_continuous_collage': 'Take collage without interrupption.',
    'manual_crop_onprint': 'If enabled, pictures are cropped at print by given height and width.',
    'manual_cups_button': 'Show a button on startpage to easily access CUPS (Common Unix Printing System).',
    'manual_dev': 'Enables development mode. Sample pictures will be used instead taking a picture.',
    'manual_event_symbol': 'Choose a symbol which is shown between entered text.',
    'manual_event_textLeft': 'Enter the text visible on the left side of the chosen symbol.',
    'manual_event_textRight': 'Enter the text visible on the right side of the chosen symbol.',
    'manual_folders_data': 'Enter the name of your data folder.',
    'manual_folders_images': 'Enter the path and name used for the Image Folder. This should be a subfolder of your "data" folder!',
    'manual_folders_keying': 'Enter the path and name used for the Chromakeying Folder. This should be a subfolder of your "data" folder!',
    'manual_folders_print': 'Enter the path and name used for the Print Folder. This should be a subfolder of your "data" folder!',
    'manual_folders_qrcodes': 'Enter the path and name used for the QR Folder. This should be a subfolder of your "data" folder!',
    'manual_folders_thumbs': 'Enter the path and name used for the Thumbnail Folder. This should be a subfolder of your "data" folder!',
    'manual_folders_tmp': 'Enter the path and name used for the TEMP Folder. This should be a subfolder of your "data" folder!',
    'manual_force_buzzer': 'If enabled, the take picture and collage buttons disappear. You now get a button which tells to use a buzzer to take a picture or collage.',
    'manual_gallery_bottom_bar': 'If enabled, the button bar is shown in the gallery below.',
    'manual_gallery_date_format': 'Enter your date style.',
    'manual_general_camera_mode': 'Choose between front- or back facing camera mode of your device cam.',
    'manual_general_cheese_time': 'Set a time to display "Cheeeeeeeese!" after the countdown.',
    'manual_general_cntdwn_time': 'Set your countdown time.',
    'manual_general_collage_cntdwn_time': 'Set your countdown time between pictures while taking a collage.',
    'manual_general_collage_key': 'Specify the key id to use that key to take a collage (e.g. 13 is the enter key). For example use <a href="https://keycode.info"  target="_blank">https://keycode.info</a> to find out the key id.',
    'manual_general_db_file': 'Name of the database file.',
    'manual_general_default_imagefilter': 'Choose an image filter which is applied by default after taking a picture.',
    'manual_general_disabled_filters': 'Choose filters which get removed from the available image filters.',
    'manual_general_file_naming': 'Choose between date formatted, numbered or random named images. For date formatted images, you can display the image with the date and time inside the gallery.',
    'manual_general_ipCamPreviewRotation': 'Choose to rotate the preview from URL.',
    'manual_general_ipCamURL': 'CSS style to use a stream from an URL for preview while countdown. <p>Example: <code>url(../img/bg_bluegray.jpg)</code></p>',
    'manual_general_language': 'Choose interface language.<p>If you are missing a language or like to help improving translations visit the <a href="https://github.com/andi34/photobooth/wiki/FAQ#how-to-update-or-add-translations"  target="_blank">"How to update or add translations?"</a> inside the Photobooth Wiki for instructions.</p>',
    'manual_general_photo_key': 'Specify the key id to use that key to take a picture (e.g. 13 is the enter key). For example use <a href="https://keycode.info"  target="_blank">https://keycode.info</a> to find out the key id.',
    'manual_general_pictureRotation': 'Enter a value which will set the degrees a picture is rotated after taking it.',
    'manual_general_picture_permissions': 'Change taken picture permissions with "chmod" command. Please only change this value if you are familiar with file permissions in Linux/Unix.',
    'manual_general_polaroid_rotation': 'Enter a value which is used as degrees a picture gets rotated with polaroid effect.',
    'manual_general_start_screen_subtitle': 'Enter the subtitle visible on startpage.',
    'manual_general_start_screen_title': 'Enter the title visible on startpage',
    'manual_general_take_collage_frame_path': 'Enter the path of the frame which is applied to your collage after taking it.',
    'manual_general_take_frame_path': 'Enter the path of the frame which is applied to your picture after taking it.',
    'manual_general_time_to_live': 'Enter a value used as milliseconds. This value defines the time your picture is visible on the result screen after taking a picture.',
    'manual_general_videoHeight': 'Enter a value which is used as height for preview by device cam.',
    'manual_general_videoWidth': 'Enter a value which is used as width for preview by device cam.',
    'manual_general_webserver_ip': 'Please define the IP address of the Photobooth web server to make the QR-Code working if you are accessing Photobooth via "localhost", "127.0.0.1" or if you have Photobooth installed inside a subfolder. <p>Example if Photobooth can be accessed directly: <code>192.168.0.50</code>.</p><p>Example if Photobooth is installed inside a subfolder: <code>192.168.0.50/photobooth</code>.</p>',
    'manual_general_wifi_ssid': 'Please define the wireless network name (SSID) to be used to access the Photobooth. The wireless network name (SSID) is displayed on the results page when the QR code is called up.',
    'manual_image_preview_before_processing': 'If enabled, images are preloaded and shown during filter processing.',
    'manual_is_event': 'If enabled, you can define a text and choose between different symbols which are visible on the start page.',
    'manual_is_textonprint': 'If enabled, you can print some text onto your pictures.',
    'manual_jpeg_quality_jpeg_quality_chroma': 'Picture quality used for chromakeying pictures.',
    'manual_jpeg_quality_jpeg_quality_image': 'Picture quality used for taking pictures.',
    'manual_jpeg_quality_jpeg_quality_thumb': 'Picture quality used for thumbnails.',
    'manual_keep_images': 'If enabled, original images will be kept inside tmp folder.',
    'manual_login_enabled': 'If enabled, a username and password will be needed to access the adminpage and/or start screen (depending on your setup).',
    'manual_login_password': 'Define your password used for login. Please note: after saving your password will only be visible as a hash inside adminpanel. For login do not enter the hash, enter the password you have set.',
    'manual_login_username': 'Define the username used to login into Photobooth.',
    'manual_mail_file': 'File name for the e-mail addresses database.',
    'manual_mail_fromAddress': 'Enter your return address which is used while sending pictures via email.',
    'manual_mail_fromName': 'Enter your sender name which is used while sending pictures via email.',
    'manual_mail_host': 'Enter your email host address.',
    'manual_mail_password': 'Enter your password used to login into your email account.',
    'manual_mail_port': 'Enter the port used for email.',
    'manual_mail_secure': 'Enter the protocol used for the transport encryption between the email client and the mail server (ssl or tls).',
    'manual_mail_subject': 'Enter the subject used while sending pictures via email.',
    'manual_mail_text': 'Enter the mail text which is used while sending pictures via email.',
    'manual_mail_username': 'Enter the username used to login into your email account.',
    'manual_newest_first': 'If enabled, latest images will be shown first inside the gallery.',
    'manual_polaroid_effect': 'If enabled, a polaroid effect is applied to your picture after it was taken.',
    'manual_preserve_exif_data': 'If enabled, EXIF data is preserved while taking pictures. Please setup "Preserve EXIF data" inside the "Commands" tab.',
    'manual_previewCamBackground': 'If enabled, a stream from your device cam is used as background on start screen.',
    'manual_previewCamFlipHorizontal': 'If enabled, preview from device cam is flipped horizontal.',
    'manual_previewCamTakesPic': 'If enabled, a picture is taken from device cam instead executing the "Take picture command". Please note that the resolution depends on the given hight and width because it acts like taking a screenshot.',
    'manual_previewFromCam': 'If enabled, a preview by your device cam is used at countdown. Preview by "device cam" will always use the camera of the device where Photobooth get opened in a Browser (e.g. on a tablet it will always show the tablet camera while on a smartphone it will always show the smartphone camera instead)! A secure origin or exception is required! You can find out how to set an exception <a href="https://medium.com/@Carmichaelize/enabling-the-microphone-camera-in-chrome-for-local-unsecure-origins-9c90c3149339"  target="_blank">here</a>.',
    'manual_previewFromIPCam': 'If enabled, a preview by defined url will be visible at countdown. Make sure to have a stream available you can use (e.g. from your Webcam, Smartphone Camera or Raspberry Pi Camera).',
    'manual_print_crop_height': 'Enter a value for the height which is used for the picture if "Crop picture at print" is enabled.',
    'manual_print_crop_width': 'Enter a value for the width which is used for the picture if "Crop picture at print" is enabled.',
    'manual_print_font_path': 'Enter the path to the font used to print text onto your image.',
    'manual_print_fontsize': 'Enter the font size used to print text on your image.',
    'manual_print_frame': 'If enabled, a frame is applied on your picture at print.',
    'manual_print_frame_path': 'Enter the path of the frame which is applied to your picture at print.',
    'manual_print_line1': 'Text used for 1. Line which gets printed on your picture.',
    'manual_print_line2': 'Text used for 2. Line which gets printed on your picture.',
    'manual_print_line3': 'Text used for 3. Line which gets printed on your picture.',
    'manual_print_linespace': 'Enter used linespace while printing text on your picture.',
    'manual_print_locationx': 'X-Coordinates of the text while printing text on your picture.',
    'manual_print_locationy': 'Y-Coordinates of the text while printing text on your picture.',
    'manual_print_qrcode': 'If enabled, a QR-Code is printed onto the right side of the picture while printing.',
    'manual_print_rotation': 'Enter a value which is used as degrees a picture gets rotated at print.',
    'manual_protect_admin': 'If enabled, admin panel can only be accessed if a username and password is entered.',
    'manual_protect_index': 'If enabled, start screen can only be accessed if a username and password is entered.',
    'manual_randomPicture': 'If enabled, random pictures will be shown at standalone gallery.',
    'manual_remove_config': 'If enabled, personal config gets removed on reset.',
    'manual_remove_images': 'If enabled, all images gets removed on reset.',
    'manual_remove_mailtxt': 'If enabled, mail database gets removed on reset.',
    'manual_rounded_corners': 'If enabled, the Photobooth UI uses smooth rounded edges.',
    'manual_scrollbar': 'If enabled, a scrollbar is visible in gallery.',
    'manual_send_all_later': 'If enabled, entered email adresses get stored inside a database instead sending choosed picture directly. For example, this can be used to send a mail with all pictures or a link to an online gallery after the event.',
    'manual_show_date': 'If enabled, date and time is visible below the image inside the gallery and standalone slideshow.',
    'manual_show_error_messages': 'If enabled real error messages are shown on error.',
    'manual_show_fork': 'If enabled, a fork badge is shown on the right upper corner on the start screen.',
    'manual_show_gallery': 'If enabled, user can access the gallery from start screen.',
    'manual_slideshow_pictureTime': 'Add a value which is used as milliseconds an image is displayed at slideshow.',
    'manual_slideshow_refreshTime': 'Refresh slideshow page afert entered seconds.',
    'manual_take_collage_frame': 'If enabled, defined frame will be applied to your collage after taking it.',
    'manual_take_frame': 'If enabled, defined frame will be applied to your picture after taking it.',
    'manual_toggle_fs_button': 'If enabled, a button to toggle fullscreenmode will be added to the start screen.',
    'manual_use_collage': 'If enabled, user can take a collage. A collage consists of 4 pictures. Optional you can take a collage with or without interruption.',
    'manual_use_download': 'If enabled, a download button is visible on each picture inside the gallery.',
    'manual_use_filter': 'If enabled, user can choose a imagefiler after taking a picture.',
    'manual_use_mail': 'If enabled, a email button is visible on each picture inside the gallery. Depending on your setup you can send pictures via email directly or collect entered email address inside a database.',
    'manual_use_print': 'If enabled, a print button is visible on result screen, gallery and chromakeying page.',
    'manual_use_qr': 'If enabled, a QR-Button is visible on the result screen and inside gallery. User can download a picture while scanning the QR-Code. If you are accessing Photobooth via "localhost", "127.0.0.1" or if you have Photobooth installed inside a subfolder, please define IP address of the Photobooth web server to make the QR-Code working. <p>Example if Photobooth can be accessed directly: <code>192.168.0.50</code>.</p><p>Example if Photobooth is installed inside a subfolder: <code>192.168.0.50/photobooth</code>.</p>',
    'manual_use_thumbs': 'If enabled, thumbnails are used for standalone gallery. This will improve the performance slightly.',
    'manual_user_interface_background_admin': 'CSS Style for background on admin panel.',
    'manual_user_interface_background_chroma': 'CSS Style for background on chromakeying page.',
    'manual_user_interface_background_image': 'CSS Style for background on start-, login- and slideshow pages.',
    'manual_user_interface_font_size': 'Enter the default font size used for the Photobooth interface.',
    'milliseconds': 'milliseconds',
    'newCollage': 'New Collage',
    'newPhoto': 'New Picture',
    'newest_first': 'Show latest images first',
    'nextPhoto': 'Next Picture',
    'percent': '%',
    'polaroid_effect': 'Polaroid effect',
    'preserve_exif_data': 'Preserve EXIF data',
    'previewCamBackground': 'Use stream from device cam as background',
    'previewCamFlipHorizontal': 'Flip image from device cam horizontally',
    'previewCamTakesPic': 'Device cam takes picture',
    'previewFromCam': 'See preview by device cam',
    'previewFromIPCam': 'Preview from URL',
    'print': 'Print',
    'print_crop_height': 'New height at print',
    'print_crop_width': 'New width at print',
    'print_font_path': 'Font',
    'print_fontsize': 'Font size',
    'print_frame': 'Print frame on picture',
    'print_frame_path': 'Frame',
    'print_line1': 'Text for line 1',
    'print_line2': 'Text for line 2',
    'print_line3': 'Text for line 3',
    'print_linespace': 'Line spacing',
    'print_locationx': 'X Coordinate',
    'print_locationy': 'Y Coordinate',
    'print_qrcode': 'QR-Code on the picture while printing',
    'print_rotation': 'Text rotation',
    'printing': 'Started printing! Please wait...',
    'protect_admin': 'Protect admin panel',
    'protect_index': 'Protect start screen',
    'qr': 'QR Code',
    'qrHelp': 'To download the picture to your smartphone, connect to the WiFi:',
    'randomPicture': 'Show random pictures',
    'really_delete': 'Really delete all picture? This cannot be undone!',
    'reload': 'Reload Page',
    'remove_config': 'Delete personal configuration (my.config.inc.php)',
    'remove_images': 'Delete images',
    'remove_mailtxt': 'Delete e-mail addresses database',
    'reset': 'Reset',
    'rounded_corners': 'Rounded corners',
    'save': 'Save',
    'saveerror': 'Error',
    'saving': 'Saving',
    'scrollbar': 'Show scrollbar in Gallery',
    'seconds': 'second(s)',
    'selectFilter': 'Image filter',
    'send': 'Send',
    'sendAllMail': 'Send me a link to all pictures in the next few days',
    'send_all_later': 'Activate checkbox to add the entered address to a file (for example, to send a mail with all pictures later)',
    'show_date': 'Show date below images in Gallery (only works if dateformat images is used)',
    'show_error_messages': 'Show error messages',
    'show_fork': 'Show Fork Badge',
    'show_gallery': 'Show Gallery',
    'show_wiki': 'Open Wiki (internet connection required)',
    'slideshow': 'Slideshow',
    'slideshow_pictureTime': 'Milliseconds an image is displayed',
    'slideshow_refreshTime': 'Refresh page afert X seconds',
    'startScreen': '<h1>Photobooth</h1><h2>Webinterface</h2> by André Rinas',
    'success': 'Saved successful',
    'symbol': 'Choose a symbol',
    'takeCollage': 'Take Collage!',
    'takePhoto': 'Take Pic!',
    'take_collage_frame': 'Take collage with frame',
    'take_frame': 'Take picture with frame',
    'test_update_available': 'There is a test update available.',
    'toggleFullscreen': 'Toggle Fullscreen',
    'toggle_fs_button': 'Show button to toggle fullscreen',
    'update_available': 'There is an update available.',
    'use_button': 'Use Buzzer to take a Picture',
    'use_collage': 'Allow photo collage',
    'use_download': 'Allow downloads',
    'use_filter': 'Allow image filter',
    'use_mail': 'Use E-Mail',
    'use_print': 'Use Print',
    'use_qr': 'Use QR Codes',
    'use_thumbs': 'Use thumbnails for slideshow',
    'user_interface': 'User interface',
    'user_interface_background_admin': 'Admin panel background image path',
    'user_interface_background_chroma': 'Chroma keying panel background image path',
    'user_interface_background_image': 'Background image path',
    'user_interface_colors_background_countdown': 'Countdown background color',
    'user_interface_colors_border': 'Border color',
    'user_interface_colors_box': 'Field color',
    'user_interface_colors_button_font': 'Buttons font color',
    'user_interface_colors_cheese': 'Cheeeeeeeese! color',
    'user_interface_colors_countdown': 'Countdown color',
    'user_interface_colors_font': 'Font color',
    'user_interface_colors_gallery_button': 'Gallery button color',
    'user_interface_colors_hover_panel': 'Admin- and login panel hover color',
    'user_interface_colors_panel': 'Admin- and login panel color',
    'user_interface_colors_primary': 'Primary color',
    'user_interface_colors_secondary': 'Secondary color',
    'user_interface_colors_start_font': 'Start screen font color',
    'user_interface_font_size': 'Default font size',
    'using_latest_version': 'You are using the latest version of photobooth.'
};
