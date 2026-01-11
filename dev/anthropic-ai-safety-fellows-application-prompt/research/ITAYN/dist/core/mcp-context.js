"use strict";
/**
 * MCP Context Manager
 *
 * Integrates with Anthropic's Model Context Protocol (MCP) to provide
 * rich contextual understanding for intention parsing. MCP enables
 * structured context sharing between AI systems and tools.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MCPContextManager = void 0;
/**
 * MCP Context Manager - bridges ITAYN with the broader MCP ecosystem
 */
class MCPContextManager {
    resources = new Map();
    tools = new Map();
    sessionHistory = [];
    serverConfig;
    constructor() {
        this.serverConfig = {
            name: 'itayn-sec-server',
            version: '1.0.0',
            capabilities: {
                resources: true,
                tools: true,
                prompts: true,
            },
        };
        this.initializeDefaultResources();
        this.initializeDefaultTools();
    }
    /**
     * Get contextual factors relevant to an input
     */
    async getContextualFactors(input) {
        const factors = [];
        // Add session context
        if (this.sessionHistory.length > 0) {
            factors.push(`session-depth:${this.sessionHistory.length}`);
        }
        // Add available tool context
        const relevantTools = this.findRelevantTools(input.content);
        factors.push(...relevantTools.map((t) => `tool-available:${t}`));
        // Add resource context
        const relevantResources = this.findRelevantResources(input.content);
        factors.push(...relevantResources.map((r) => `resource-available:${r}`));
        // Track in session history
        this.sessionHistory.push(input.content.slice(0, 100));
        return factors;
    }
    /**
     * Register an MCP resource
     */
    registerResource(resource) {
        this.resources.set(resource.uri, resource);
    }
    /**
     * Register an MCP tool
     */
    registerTool(tool) {
        this.tools.set(tool.name, tool);
    }
    /**
     * Get server capabilities for MCP handshake
     */
    getServerInfo() {
        return this.serverConfig;
    }
    /**
     * List available resources (MCP protocol method)
     */
    listResources() {
        return Array.from(this.resources.values());
    }
    /**
     * List available tools (MCP protocol method)
     */
    listTools() {
        return Array.from(this.tools.values());
    }
    /**
     * Read a resource by URI (MCP protocol method)
     */
    async readResource(uri) {
        const resource = this.resources.get(uri);
        if (!resource)
            return null;
        // In production, this would fetch actual resource content
        return `Content of ${resource.name}`;
    }
    /**
     * Call a tool (MCP protocol method)
     */
    async callTool(name, args) {
        const tool = this.tools.get(name);
        if (!tool) {
            throw new Error(`Tool not found: ${name}`);
        }
        // In production, this would execute the actual tool
        return { success: true, tool: name, args };
    }
    // --- Private helpers ---
    initializeDefaultResources() {
        this.registerResource({
            uri: 'itayn://principles/constitutional',
            name: 'Constitutional AI Principles',
            description: 'Core safety principles for intention validation',
            mimeType: 'application/json',
        });
        this.registerResource({
            uri: 'itayn://context/session',
            name: 'Session Context',
            description: 'Current session state and history',
            mimeType: 'application/json',
        });
        this.registerResource({
            uri: 'itayn://safety/tiers',
            name: 'Safety Tier Definitions',
            description: 'Definitions and thresholds for safety tiers',
            mimeType: 'application/json',
        });
    }
    initializeDefaultTools() {
        this.registerTool({
            name: 'validate_intention',
            description: 'Validate a parsed intention against constitutional principles',
            inputSchema: {
                type: 'object',
                properties: {
                    intention: { type: 'object', description: 'ParsedIntention object' },
                },
                required: ['intention'],
            },
        });
        this.registerTool({
            name: 'translate_to_action',
            description: 'Translate a validated intention into a safe action',
            inputSchema: {
                type: 'object',
                properties: {
                    intention: { type: 'object' },
                    safetyAssessment: { type: 'object' },
                },
                required: ['intention', 'safetyAssessment'],
            },
        });
        this.registerTool({
            name: 'submit_feedback',
            description: 'Submit feedback signal for learning',
            inputSchema: {
                type: 'object',
                properties: {
                    actionId: { type: 'string' },
                    satisfaction: { type: 'number', minimum: 1, maximum: 5 },
                    corrections: { type: 'array', items: { type: 'string' } },
                },
                required: ['actionId'],
            },
        });
    }
    findRelevantTools(content) {
        const relevant = [];
        const lower = content.toLowerCase();
        for (const [name, tool] of this.tools) {
            if (lower.includes(name.replace(/_/g, ' '))) {
                relevant.push(name);
            }
        }
        return relevant;
    }
    findRelevantResources(content) {
        const relevant = [];
        const lower = content.toLowerCase();
        for (const [uri, resource] of this.resources) {
            if (resource.description && lower.includes(resource.description.toLowerCase().split(' ')[0])) {
                relevant.push(resource.name);
            }
        }
        return relevant;
    }
}
exports.MCPContextManager = MCPContextManager;
//# sourceMappingURL=mcp-context.js.map