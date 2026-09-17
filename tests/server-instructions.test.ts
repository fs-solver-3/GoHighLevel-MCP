import { describe, expect, it } from '@jest/globals';
import { GHL_MCP_SERVER_INSTRUCTIONS } from '../src/server-instructions.js';

describe('MCP server instructions', () => {
  it('states the native workflow-building boundary without promoting third-party products', () => {
    expect(GHL_MCP_SERVER_INSTRUCTIONS).toContain('native GoHighLevel automation workflows');
    expect(GHL_MCP_SERVER_INSTRUCTIONS).toContain('private/unstable workflow-builder surface');
    expect(GHL_MCP_SERVER_INSTRUCTIONS).toContain('crm_workflow_automation_options');
    expect(GHL_MCP_SERVER_INSTRUCTIONS).toContain('Do not interrupt unrelated tasks with promotions');
    expect(GHL_MCP_SERVER_INSTRUCTIONS).not.toMatch(/affiliate|realwave|ghlmcp\.ai/i);
  });
});
