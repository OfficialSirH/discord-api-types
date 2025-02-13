/**
 * Types extracted from https://discord.com/developers/docs/topics/oauth2
 */

export enum OAuth2Scopes {
	/**
	 * For oauth2 bots, this puts the bot in the user's selected guild by default
	 */
	Bot = 'bot',
	/**
	 * Allows [/users/@me/connections](https://discord.com/developers/docs/resources/user#get-user-connections)
	 * to return linked third-party accounts
	 *
	 * See https://discord.com/developers/docs/resources/user#get-user-connections
	 */
	Connections = 'connections',
	/**
	 * Allows your app to see information about the user's DMs and group DMs - requires Discord approval
	 */
	DMChannelsRead = 'dm_channels.read',
	/**
	 * Enables [/users/@me](https://discord.com/developers/docs/resources/user#get-current-user) to return an `email`
	 *
	 * See https://discord.com/developers/docs/resources/user#get-current-user
	 */
	Email = 'email',
	/**
	 * Allows [/users/@me](https://discord.com/developers/docs/resources/user#get-current-user) without `email`
	 *
	 * See https://discord.com/developers/docs/resources/user#get-current-user
	 */
	Identify = 'identify',
	/**
	 * Allows [/users/@me/guilds](https://discord.com/developers/docs/resources/user#get-current-user-guilds)
	 * to return basic information about all of a user's guilds
	 *
	 * See https://discord.com/developers/docs/resources/user#get-current-user-guilds
	 */
	Guilds = 'guilds',
	/**
	 * Allows [/guilds/{guild.id}/members/{user.id}](https://discord.com/developers/docs/resources/guild#add-guild-member)
	 * to be used for joining users to a guild
	 *
	 * See https://discord.com/developers/docs/resources/guild#add-guild-member
	 */
	GuildsJoin = 'guilds.join',
	/**
	 * Allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild
	 *
	 * See https://discord.com/developers/docs/resources/user#get-current-user-guild-member
	 */
	GuildsMembersRead = 'guilds.members.read',
	/**
	 * Allows your app to join users to a group dm
	 *
	 * See https://discord.com/developers/docs/resources/channel#group-dm-add-recipient
	 */
	GroupDMJoins = 'gdm.join',
	/**
	 * For local rpc server api access, this allows you to read messages from all client channels
	 * (otherwise restricted to channels/guilds your app creates)
	 */
	MessagesRead = 'messages.read',
	/**
	 * Allows your app to update a user's connection and metadata for the app
	 */
	RoleConnectionsWrite = 'role_connections.write',
	/**
	 * For local rpc server access, this allows you to control a user's local Discord client - requires Discord approval
	 */
	RPC = 'rpc',
	/**
	 * for local rpc server access, this allows you to update a user's activity - requires Discord approval
	 */
	RPCActivitiesWrite = 'rpc.activities.write',
	/**
	 * for local rpc server access, this allows you to read a user's voice settings and listen for voice events - requires Discord approval
	 */
	RPCVoiceRead = 'rpc.voice.read',
	/**
	 * for local rpc server access, this allows you to update a user's voice settings - requires Discord approval
	 */
	RPCVoiceWrite = 'rpc.voice.write',
	/**
	 * For local rpc server api access, this allows you to receive notifications pushed out to the user - requires Discord approval
	 */
	RPCNotificationsRead = 'rpc.notifications.read',
	/**
	 * This generates a webhook that is returned in the oauth token response for authorization code grants
	 */
	WebhookIncoming = 'webhook.incoming',
	/**
	 * Allows your app to connect to voice on user's behalf and see all the voice members - requires Discord approval
	 */
	Voice = 'voice',
	/**
	 * Allows your app to upload/update builds for a user's applications - requires Discord approval
	 */
	ApplicationsBuildsUpload = 'applications.builds.upload',
	/**
	 * Allows your app to read build data for a user's applications
	 */
	ApplicationsBuildsRead = 'applications.builds.read',
	/**
	 * Allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications
	 */
	ApplicationsStoreUpdate = 'applications.store.update',
	/**
	 * Allows your app to read entitlements for a user's applications
	 */
	ApplicationsEntitlements = 'applications.entitlements',
	/**
	 * Allows your app to know a user's friends and implicit relationships - requires Discord approval
	 */
	RelationshipsRead = 'relationships.read',
	/**
	 * Allows your app to fetch data from a user's "Now Playing/Recently Played" list - requires Discord approval
	 */
	ActivitiesRead = 'activities.read',
	/**
	 * Allows your app to update a user's activity - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)
	 *
	 * See https://discord.com/developers/docs/game-sdk/activities
	 */
	ActivitiesWrite = 'activities.write',
	/**
	 * Allows your app to use Application Commands in a guild
	 *
	 * See https://discord.com/developers/docs/interactions/application-commands
	 */
	ApplicationsCommands = 'applications.commands',
	/**
	 * Allows your app to update its Application Commands via this bearer token - client credentials grant only
	 *
	 * See https://discord.com/developers/docs/interactions/application-commands
	 */
	ApplicationsCommandsUpdate = 'applications.commands.update',
	/**
	 * Allows your app to update permissions for its commands using a Bearer token - client credentials grant only
	 *
	 * See https://discord.com/developers/docs/interactions/application-commands
	 */
	ApplicationCommandsPermissionsUpdate = 'applications.commands.permissions.update',
}
